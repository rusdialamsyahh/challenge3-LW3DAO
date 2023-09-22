
### network swisstronik 

#### Req

```shell
npx hardhat run scripts/getStorage.js --network swisstronik
```

#### response

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://json-rpc.testnet.swisstronik.com/'
}

Response:
Storage Value at Slot 0: 0x0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4
```

### Network sepolia

#### req

```shell
npx hardhat run scripts/getStorage.js --network sepolia
```

#### Response

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://rpc.sepolia.org'
}

Response:
Storage Value at Slot 0: 0x0x0000000000000000000000000000000000000000000000000000000000000000
```

### Network Mumbai
#### Request

```shell
npx hardhat run scripts/getStorage.js --network mumbai
```

#### Response

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://polygon-mumbai.blockpi.network/v1/rpc/public'
}

Response:
Storage Value at Slot 0: 0x0x0000000000000000000000000000000000000000000000000000000000000000
```
