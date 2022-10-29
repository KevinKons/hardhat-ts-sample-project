// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LimitlessCollection is ERC721, ERC721URIStorage, Pausable, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    uint256 constant public PRICE = 0.5 ether;
    uint256 constant public MAX_SUPPLY = 1000;
    
    string public baseURI;

    enum DistributionPhase {
        closed,
        preSale,
        sale
    }

    Counters.Counter private _tokenIdCounter;
    DistributionPhase public distributionPhase;

    constructor(string memory _baseURI) ERC721("LimitlessCollection", "NFT") {
        baseURI = _baseURI;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function buyNFT() public payable whenNotPaused {
        require(
            distributionPhase != DistributionPhase.closed,
            "Sale is closed"
        );
        require(
            _tokenIdCounter.current() < 1000,
            "All tokens sold"
        );
        require(msg.value < PRICE, "Sent amount is smaller than price");

        if (distributionPhase == DistributionPhase.preSale) {
            //verify user is on whitelist
        }

        safeMint(msg.sender);
    }

    function safeMint(address to) private {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function tokenURI(uint256 tokenId) 
        public
        view
        virtual
        override(ERC721, ERC721URIStorage) 
        returns (string memory) 
    {
        _requireMinted(tokenId);
        return bytes(baseURI).length != 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : '';
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

}