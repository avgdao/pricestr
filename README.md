# Pricestr

Simple webpage that fetches and displays Nostr posts with the hashtag #nostrmarket.

Currently uses Nostr.band's RSS (feeds_rss.js) or API (feeds_api.js) to fetch posts.

- RSS: https://rss.nostr.band/feeds/ff85/1fd07514e0473b3da6bc4a151827e1d1776a9040e856006594e3fadd2f2dff85.xml
- API: https://nostr.realsearch.cc/nostr?method=search&q=%23nostrmarket%20-filter%3Aspam&p=0

Preview it here: https://nostr.bitejo.com

To install, just download the zip and extract it to your web host.

## Publish a listing

Write a post with the hashtag #nostrmarket and one of these tags #selling #buying #service #job using your regular Nostr client and your listing will display on the webpage.

## Order a listing

Click on the listing to message the seller with your regular Nostr client.

Nostr Market does not process payments. Contact the seller to pay them directly with Bitcoin.

## Possible improvements

- Make a UI that is more similar to Ebay, Etsy, etc.
- Add regex to scrape price, location, etc.
- Add a product form for easier formatting and search, e.g.:
  - Type: Selling
  - Title: Thinkpad T480
  - Description: Refurbished Lenovo Thinkpad T480 in excellent condition.
  - Photo: https://imgur.com/thinkpad.jpg
  - Price: 0.015 BTC
  - Location: United States (worldwide shipping)
- Use a CLI client to fetch #nostrmarket posts (to reduce API load)
- Cache posts (for speed and reduced API load)
- Convert photos to thumbnails on the backend or via an API (to use less mobile data)

## A more complex system...

- A more complex system could use different post types:
  - Instead of a profile, you have a store
  - Instead of posts, you have products
  - Instead of comments, you have reviews
  - Instead of private messages, you have orders
- Payments could be implemented via Zaps
- Implementation of a Lightning Escrow
  - Possibly with a marketplace of mediators, like Bitrated.com
- Autofulfill for digital products
  - Example: Receive a download link for an e-book or a gift card code, as soon as your Zap is detected
- Client ideas
  - An ecommerce frontend like WooCommerce for online stores
  - A simple classifieds frontend like Craigslist for one-time sales
  - Possibly a Gofundme/Kickstarter frontend where donations are Zaps
  
I probably won't start to work on this anytime soon, so feel free to take this concept and build something with it.

## Credits

- Global search: https://nostr.band
- NIP-19 hex to note conversion: https://github.com/slowli/bech32-buffer
- XML to JSON conversion: https://github.com/abdolence/x2js

## Development 

This project is a generic starter for developers to use in Codespaces that includes basic system tools and extensions.

## What's Included

This is a basic environment that should be ready to expand upon to build a day-to-day development envrionment for Rust. It comes with the following software choices:

### System Tools

- [curl/curl](https://github.com/curl/curl): the command line tool for transferring data over a metric boatload of protocols.
- git: the Git SCM tool.
- [gnupg2](https://gnupg.org/): a complete and free implementatiuon of the OpenPGP standard.
- [stedolan/jq](https://github.com/stedolan/jq) - a command line JSON parser.
- [sudo](https://www.sudo.ws/) - the superuser authority delegation tool.
- [zsh](https://www.zsh.org/) - interactive terminal (alternative to `bash`).
- [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) - a delightful community driven framework for managing zsh config.
- [vim](https://www.vim.org/) - a text editor
- build essentials - tools for compiling and linking code
- [openssl](https://www.openssl.org/) - tls and ssl toolkit

### Rust Tools

Besides Rust and Cargo, the image comes with the following Rust related tooling:

- [rustup](https://rustup.rs/): installer and toolchain manager
- [rustfmt](https://github.com/rust-lang/rustfmt): a tool for formatting Rust code according to style guidelines
- [clippy](https://github.com/rust-lang/rust-clippy): lints to catch common mistakes and improve your Rust code

### VS Code Extensions

- [Rust Analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer): an alternative rust language server to the RLS.
- [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb): native debugger based on LLDB.
- [Crates](https://marketplace.visualstudio.com/items?itemName=serayuzgur.crates): helps Rust developers managing dependencies with Cargo.toml.
- [Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare): collaborative, multi-user remote editing from directly within the editor.

### Operating System

- [Ubuntu 22.04](https://releases.ubuntu.com/22.04/): The 22.04 LTS version of Ubuntu.

## Usage

### Visual Studio Codespaces

#### Inital Creation

For usage in VS Codespaces, you're going to want to head over to [online.visualstudio.com](https://online.visualstudio.com) and sign up for VS Codespaces (that process is outside the scope of these instructions). Once you've got an account and are signed in to [online.visualstudio.com](https://online.visualstudio.com), you're going to take the following steps:

- Ensure you're on the `/environments` page at [online.visualstudio.com/environments](https://online.visualstudio.com/environments)
- In the top right corner, there'll be a "Create environment" button. Click this button, which will open up a panel from the right side of the screen. Fill in the details of this panel:
  - **Codespace Name:** This will be the visible name of your environment within Codespaces. The value here doesn't particularly matter.
  - **Git Repository:** This is going to be either the URL you'd `git clone` the repo from or the GitHub `<org OR user>/<repo>` shorthand. For this repo, the easier value would be `codespaces-examples/rust`.
  - **Instance Type:** For this, you're going to choose your plan - in my case, I'm just going to go with the `Standard (Linux)` plan. For most use cases of this starter, `Basic (Linux)` should suffice. You can also change your plan at any time, as your workload demands.
  - **Suspend idle environment after:** This is the period of time you want your environment to automatically suspend after you've stopped actively using it. I generally chose 5 minutes and have not had any problems to date.
  - **Dotfiles (optional):** These are entirely optional, and are available for advanced users.
    - **Dotfiles Repository:** Using the `git clone` URL or the GitHub `<org OR user>/<repo>` syntax, you can define the repo to pull your dotfiles from. For examples, see [jessfraz/dotfiles](https://github.com/jessfraz/dotfiles) or [fnichol/dotfiles](https://github.com/fnichol/dotfiles).
    - **Dotfiles Install Command:** The name of the file or the command to run to install your dotfiles.
    - **Dotfiles Target Path:** The path where your dotfiles should be installed.
  - Once you've filled out all of those (and resolved any errors in the form validation, if any occurred), you'll be able to click "Create" at the bottom of the panel and your environment will start creating.

#### Connecting to your Environment

Once you've completed the Creation steps, your environment will be usable from Codespaces until you delete it. You can access it by going to [online.visualstudio.com](https://online.visualstudio.com) and selecting the vertical elipsis menu to connect to it from the browser or launch it in VS Code / VS Code Insiders.

When inside of the environment you can change envrionments themselves from the command pallete with the `Codespaces: Connect`.

> **Note:** See the [VS Online in the Browser](https://docs.microsoft.com/en-us/visualstudio/online/quickstarts/browser) quickstart for more information.

Additionally, if you've installedthe [Visual Studio Codespaces](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline) extension in VS Code locally, you'll be able to directly connect from VS Code itself.

> **Note:** See the [VS Online in VS Code](https://docs.microsoft.com/en-us/visualstudio/online/quickstarts/vscode) quickstart for more information.

#### Working

Now that you're set up and connected, you should be able to work within your Codespaces environment.

### Developing inside a Container

Using [Visual Studio Code](https://code.visualstudio.com/) and a [specific extension](https://aka.ms/vscode-remote/download/extension), we can load this setup in a brand new local [Docker](https://docker.com/) container and use it as a full-featured development environment. Note that this approach requires a few more steps than using the online setup mentioned above. The advantages being that this works offline and there are no costs associated with this approach. It is a great way to play with a setup without having to install everything globally on one's machine!

#### Requirements

There are 3 main requirements: **VSCode**, **the Remote - Containers VSCode extension** and **Docker**.

Follow the instruction [guide here](https://code.visualstudio.com/docs/remote/containers#_installation) and come back here once those 3 components are installed locally.

### Setup

To load this setup in a container, we need to point to it. We have many options here, the main ones being to connect to a repository and the other one to open a local folder with the codespace repo checked out. We are going to take the easiest approach and setup the code space directly from this repository.

1. In VSCode, click on the green icon in the lower left corner.

![](https://code.visualstudio.com/assets/docs/remote/common/remote-dev-status-bar.png)

2. Choose  `Remote-Containers: Open Repository in container`
3. Type `codespaces-examples/rust` in the prompt.
4. Chose to create a unique volume.
5. Wait until the container is setup and you are connected to it, at this point, it should ask you to install the Language server for the rust-analyzer, go ahead and click "Download now".
![](https://user-images.githubusercontent.com/113/84297926-2ad3da00-ab03-11ea-8045-690eb0763d9f.png)

That's it, you are all setup, you can modify and run the code in your local VSCode instance but the code and extensions will run in your container.

## License

This code is in the public domain. Feel free to use it for your own projects.