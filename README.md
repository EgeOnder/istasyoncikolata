# istasyoncikolata

[![Build][build-shield]][build-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ol>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ol>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#maintainers">Maintainers</a></li>
  </ol>
</details>

## About the project

istasyoncikolata is a website for a restaurant/café built with Astro.

## Getting started

**IMPORTANT:** _The installation guide is only for Linux distributions but you can follow the links for proper installation on your operating system._

Please follow this guide carefully to install _kafeasist built with Node_ to your local machine. This installation guide may differ from OS to OS. So if you use a different OS, please consider reading the installation documentations for your OS from the links given below.

### Prerequisites

-   Install **npm**: (guide can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
    ```sh
    sudo apt-get install nodejs npm
    ```
    Current tested versions can be found in the workflow file.
-   **(OPTIONAL)** Install **yarn**: (guide can be found [here](https://classic.yarnpkg.com/lang/en/docs/install))

    ```sh
    npm install -g yarn
    ```

### Installation

-   Clone the repository:

    ```sh
    git clone https://github.com/EgeOnder/istasyoncikolata.git
    ```

-   Install packages:

    With **npm**: (the guide will be on yarn, if you want to continue using npm, you need to figure out the commands yourself)

    ```sh
    npm install
    ```

    With **yarn**: (preferred, guide will contiune with this)

    ```sh
    yarn install
    ```

-   If you want to build the project:
    ```sh
    yarn build
    ```

### Usage

-   Run the project in development mode:

    ```sh
    yarn dev
    ```

-   Force lint the code using **eslint**:

    ```sh
    yarn lint
    ```

## Contributing

Contributions to the project is highly appreciated. If you have any suggestions/questions/requests please consider [opening an issue](https://github.com/EgeOnder/istasyoncikolata/issues/new). If you want to contribute to the project, fixing an open issue is greatly recommended and appreciated. To see the all contribution rules please check the [contribution rules](CONTRIBUTING.md).

## License

This project is licensed under `MIT License` if you want to see more, please check [LICENSE][license-url] for more information.

## Maintainers

| Name      | E-Mail                                     | Twitter                                       | Role      |
| --------- | ------------------------------------------ | --------------------------------------------- | --------- |
| Ege Onder | 40398628+EgeOnder@users.noreply.github.com | [@EgeOnder23](https://twitter.com/EgeOnder23) | developer |

[build-shield]: https://img.shields.io/github/actions/workflow/status/EgeOnder/istasyoncikolata/main.yml?style=for-the-badge
[build-url]: https://github.com/EgeOnder/istasyoncikolata/actions
[contributors-shield]: https://img.shields.io/github/contributors/EgeOnder/istasyoncikolata.svg?style=for-the-badge
[contributors-url]: https://github.com/EgeOnder/istasyoncikolata/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EgeOnder/istasyoncikolata.svg?style=for-the-badge
[forks-url]: https://github.com/EgeOnder/istasyoncikolata/network/members
[stars-shield]: https://img.shields.io/github/stars/EgeOnder/istasyoncikolata.svg?style=for-the-badge
[stars-url]: https://github.com/EgeOnder/istasyoncikolata/stargazers
[license-shield]: https://img.shields.io/github/license/EgeOnder/istasyoncikolata?style=for-the-badge
[license-url]: https://github.com/EgeOnder/istasyoncikolata/blob/main/LICENSE
