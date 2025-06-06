// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.11;  
  
contract PLContract {  
    // Token 的元数据  
    string private _name;  
    string private _symbol;  
      
    // 存储token ID到所有者的映射  
    mapping(uint256 => address) private _tokenOwners;  
    // 存储每个地址拥有的token数量  
    mapping(address => uint256) private _tokenBalances;  
    //上传藏品结构体
    struct Newcard {
        string hashValue;
        string creator;
        uint256 creationTime;
    }
     //存储上传的新藏品版权信息
    mapping(string => Newcard) public newcards;
    // 记录每个藏品的授权状态
    mapping(uint256 => bool) private _tokenApprovals;

    //定义事件
    event CardRegistered(string hashValue, string creator, uint256 creationTime);
    event TokenApproved(uint256 indexed tokenId, address indexed owner);
    event TokenTransferred(uint256 indexed tokenId, address indexed from, address indexed to);
    event TokenApprovalRevoked(uint256 indexed tokenId, address indexed owner);


    // 构造函数  
    constructor() {  
        _name = "polang";  
        _symbol = "PL";  
    }
    // 接收ETH  
    receive() external payable {  
         
    } 
    function name() public view  returns (string memory) {
        return _name;
    }
    //上传藏品
    function updateCard(
        string memory _hashValue,
        string memory _creator,
        uint256 _creationTime
    ) public {
        require(bytes(newcards[_hashValue].hashValue).length == 0, "Copyright already registered");
        Newcard memory thiscard = Newcard({
            hashValue: _hashValue,
            creator: _creator,
            creationTime: _creationTime
        });
        newcards[_hashValue] = thiscard;
        emit CardRegistered(_hashValue, _creator, _creationTime);
    }
    //生成藏品哈希
    function poLanghash(string memory str) public pure returns (bytes32){
        return keccak256(abi.encodePacked(str));
    }  
    // 铸造新的token  
    function mint(address to, uint256 tokenId) public {  
        require(_tokenOwners[tokenId] == address(0), "ERC721: token already minted");  
        _tokenOwners[tokenId] = to;  
        _tokenBalances[to]++;  
    }

    // 卖家授权出售藏品
    function approveToken(uint256 tokenId) external {
        _tokenApprovals[tokenId] = true;
        emit TokenApproved(tokenId, msg.sender);
    }
    
    // 撤销授权
    function revokeTokenApproval(uint256 tokenId) external {
        _tokenApprovals[tokenId] = false;
        emit TokenApprovalRevoked(tokenId, msg.sender); // 发出撤销授权事件
    }
     
    // 转移token所有权 
    function transferToken(uint256 tokenId, address to) public tokenExists(tokenId) addressIsValid(to){
        address from = _tokenOwners[tokenId];
        require(_tokenApprovals[tokenId], "Token not approved"); // 检查是否对进行了授权
        // 执行代币转移
        _tokenOwners[tokenId] = to; // 新地址成为新所有者
        _tokenBalances[from]--; // 原所有者余额减少
        _tokenBalances[to]++; // 新所有者余额增加
        // 清除授权状态，防止再次转移
        _tokenApprovals[tokenId] = false;
        emit TokenTransferred(tokenId, from, to); // 发出转移事件
    }

    // 获取token的拥有者  
    function ownerOf(uint256 tokenId) public view tokenExists(tokenId) returns (address) {  
        return _tokenOwners[tokenId];  
    }

    // 获取某个地址拥有的token数量  
    function balanceOf(address owner) public view returns (uint256) {  
        return _tokenBalances[owner];  
    }  
      
      
    // 检查token ID是否有效且被分配  
    modifier tokenExists(uint256 tokenId) {  
        require(_tokenOwners[tokenId] != address(0), "ERC721: token ID does not exist");  
        _;  
    }  
      
    // 检查地址是否有效  
    modifier addressIsValid(address to) {  
        require(to != address(0), "ERC721: address zero is not a valid recipient");  
        _;  
    }  
      
    // 检查调用者是否拥有token  
    function _isOwner(address owner, uint256 tokenId) private view returns (bool) {  
        return _tokenOwners[tokenId] == owner;  
    }  
      

}