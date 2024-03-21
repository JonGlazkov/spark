/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.77.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { ProxyAbi, ProxyAbiInterface } from "../ProxyAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Error",
      "components": [
        {
          "name": "AccessDenied",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidPythFeePayment",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "DebugModeRequired",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
    },
    {
      "typeId": 4,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
    },
    {
      "typeId": 10,
      "type": "struct SparkContracts",
      "components": [
        {
          "name": "version",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "account_balance_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "clearing_house_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "insurance_fund_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "treasury_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "perp_market_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "vault_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "pyth_address",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 9,
          "typeArguments": [
            {
              "name": "",
              "type": 4,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
    },
    {
      "typeId": 12,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "debug_increment_timestamp",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price_feed",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 12,
          "typeArguments": null
        }
      ],
      "name": "debug_set_price",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_all_spark_contracts_versions",
      "output": {
        "name": "",
        "type": 11,
        "typeArguments": [
          {
            "name": "",
            "type": 10,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price_feed",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "get_price",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_spark_contracts",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "version",
          "type": 12,
          "typeArguments": null
        }
      ],
      "name": "get_spark_contracts_by_version",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "account_balance_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "clearing_house_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "insurance_fund_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "treasury_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "perp_market_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "vault_address",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "pyth_address",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "publish_new_version",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "timestamp",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price_update_data",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 7,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "update_price",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [],
      "name": "version",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "OWNER",
      "configurableType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      },
      "offset": 17056
    },
    {
      "name": "DEBUG_STEP",
      "configurableType": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 12,
            "typeArguments": null
          }
        ]
      },
      "offset": 16808
    }
  ]
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class ProxyAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): ProxyAbiInterface {
    return new Interface(_abi) as unknown as ProxyAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): ProxyAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as ProxyAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<ProxyAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = ProxyAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as ProxyAbi;
  }
}
