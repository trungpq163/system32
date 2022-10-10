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
