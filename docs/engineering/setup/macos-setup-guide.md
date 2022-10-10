---
title: MacOS Setup Guide
slug: engineering/macos-setup-guide
sidebar_label: MacOS Setup Guide
---

## XCode

- Open `AppStore` and install `Xcode`
- After `Xcode` finishes, open your `Terminal` and run the following command which will install `Xcode Command Line Tools` which is required for many other tools, especially `HomeBrew`

```bash
xcode-select --install
```

## Homebrew

Next, we'll install `Homebrew`, `Homebrew` is like npm but for your systems rather than JS applications. With `homebrew`, you can install all kind of tools/applications and manages them in one place. Open your terminal and run the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After the process is finished, you can run `brew doctor` in the same terminal to check if "your system is ready to brew".

Following are some most used Homebrew commands that you'll probably use:

- To search for a package (or Formulae or Cask in Homebrew vocabulary):

```bash
brew search search_phrase
```

- To install a formulae

```bash
brew install formulae_name
```

- To install a cask

```bash
brew install --cask cask_name
```

## iTerm2 & Alfred

With Homebrew installed, you should start installing two things: iTerm2 and Alfred 4

```bash
brew install --cask iterm2
brew install --cask alfred
```

Run iTerm2 and start setting a couple of things up. The following items are all optional

- Go to Preferences -> Profiles -> Session, and check Status bar enabled and configure them how you want. I personally have: Current Directory, CPU Utilization and Memory Utilization

![](https://i.imgur.com/onU67yl_d.webp?maxwidth=760&fidelity=grand)

- If you want to change your typography, go to Preferences -> Profiles -> Text. I use Operator Mono SSm Lig Ligh 13px

- And browse to https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/schemes to pick a theme that you like. Then go to Preferences -> Profiles -> Colors, import the preset that you picked and select it. I personally use Dracula

- Finally, change something in a terminal for more beautiful that like size, color, gradient

![](https://i.imgur.com/3L53b3n.png)

Next up is `Alfred 4`, `Alfred` is `Spotlight` replacement and if you're willing to pay (which you should) for the `Power Pack`, you'll never live your life normally without `Alfred`. First of all, we need to disable `Spotlight`.

- Run `Spotligh` and uncheck everything that you don't want. I uncheck `Fonts`, `Images` and such.
- Click on `Keyboard Shortcuts` and uncheck `Show Spotlight Search`. While you're here, click on `Services`, look for `Search man Page Index in Terminal` and uncheck that as well
- Run `Alfred`. Check `Launch Alfred at login` change change your `Alfred Hotkey` to `⌘ Space`. Then you're all set.

## zsh and oh-my-zsh

One of the reasons why iTerm2 is so much more powerful than Terminal is that you can customize it. There are many different frameworks that can make your iTerm2 experience up another level. Personally, I always go with zsh and oh-my-zsh because of how well-known it is, easy to look for answers you know. To install zsh, we'll use Homebrew.

```bash
brew install zsh
```

After that's done, run the following command to install oh-my-zsh:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Now you have the power of `oh-my-zsh` in your `iTerm2`. Your main configuration file will be `~/.zshrc` instead of `~/.bash_profile` or `~/.bashrc`. We'll start setting up `oh-my-zsh` with some productivity stuffs.

By default, `zsh` provides an `alias` to quickly open `~/.zshrc` from the terminal. However, you might want to install your favorite text editor before doing so. I usually install `vim` and `vscode` at this point.

```bash
brew install vim
brew install --cask visual-studio-code
```

vim feels easier to me and VSCode has that code command that you can open VSCode from the terminal. Go ahead and execute:

```bash
code ~/.zshrc
```

If code is not available, run Visual Studio Code -> Open the Command Palette -> Shell Command: install 'code' command in PATH

alias is your shortcut to any shell/combinations of shell

Let's setup some aliases to make your life easier.

```bash
# change to code if you use vscode
alias zshconfig="nvim ~/.zshrc"
# you need to source zshrc after you make change like adding plugins
alias zshsource="source ~/.zshrc"
# quickly open oh-my-zsh config
alias ohmyzsh="code ~/.oh-my-zsh"
# best alias ever
alias c="clear"

alias rm="rm -rf"
alias lsh="ls -lah"
alias cd..="cd .."

# find node_modules recursively from the current dir
alias findnode="find . -name "node_modules" -type d -prune -print | xargs du -chs"
# remove those node_modules
alias rmnode="find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;"

# if you develop iOS app, this will list all available simulators
alias listios="xcrun simctl list devices"

# CLI Alias
alias cra="create-react-app"
alias crl="create-react-library"
alias rn="react-native"
```

If you're from ~/.bash_profile or ~/.bashrc, you'll need to add the next line to your ~/.zshrc

```bash
# If you come from bash you might to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH
```

```bash
# extraneous stuffs
export CLICOLOR=1
export LC_ALL=en_US.UTF-8
```

Theme: You can go to https://github.com/ohmyzsh/ohmyzsh/wiki/Themes and pick a theme you like. Then edit the following line

```bash
Theme: You can go to https://github.com/ohmyzsh/ohmyzsh/wiki/Themes and pick a theme you like. Then edit the following line
```

- Plugins: By default, `zsh` comes with various plugins and will enable `git` plugin by default. `git` plugin provides you with all kinds of `git` shortcuts. Check [https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index](https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index) out. I have the following plugins enabled.

  - `colored-man-pages`: comes with `zsh`
  - `colorize`: comes with `zsh`
  - `zsh-syntax-highlighting`: [https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md#oh-my-zsh](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md#oh-my-zsh)
  - `zsh-autosuggestions`: [https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)
  - `zsh-completions`: [https://github.com/zsh-users/zsh-completions#oh-my-zsh](https://github.com/zsh-users/zsh-completions#oh-my-zsh)

Now that we have setup our terminal, it's time to start installing some applications. Use brew search to search for an app that you want

```bash
brew install --cask google-chrome
brew install --cask appcleaner
brew install --cask postman
```

## NodeJS

There are many ways to install NodeJS but I'd recommend using nvm to manage NodeJS on your machine. nvm stands for Node Version Manager and it allows you to install and switch between versions very easily.

- Install `nvm`

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```

- Run `zshsource`
- Run `command -v nvm` to check if `nvm` is available. If you have issue, it's most likely that `nvm` is missing in your `PATH`. Fix by adding the following block to your `~/.zshrc`

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

- Run `nvm install node`. This will install the latest version of `NodeJS` on your machine.
- Run `nvm ls` to list installed `Node` versions
- Run `nvm ls-remote` to list `Node` versions that you install

## Python

Even though I don't use Python as a programing language, but some tools are built with Python. So I'd also recommend installing Python using pyenv (just like nvm for NodeJS)

- Install pyenv

```bash
brew install pyenv
```

- Update PATH

```bash
  echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

- Run `pyenv` install --list. If you have issue here, restart your terminal.
- Run `pyenv` install version_here to install Python. I usually install latest 2.x and latest 3.x

## Database

Again, consult [https://sourabhbajaj.com/mac-setup/](https://sourabhbajaj.com/mac-setup/) and pick the ones that are relevant to you.

## Docker

Docker can be installed by visiting this https://docs.docker.com/docker-for-mac/install/. If you like GUI, I'd recommend Kitematic which is awesome

```bash
brew cask install kitematic
```

## MongoDB

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

## References

Sources:
[https://nartc.me/blog/macos-dev-setup/](https://nartc.me/blog/macos-dev-setup/)
