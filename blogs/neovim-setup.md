---
title: "Moving to Neovim: My Lua Setup"
date: "2025-01-15"
description: "A personal journey of switching to Neovim, complete with configuration details, essential plugins, and lessons learned along the way."
---

Just switched to Neovim last month, and like ThePrimeagen says - if your editor isn't blazingly fast, why even bother? Here's my setup after countless hours of config tweaking and Stack Overflow visits.

## Why Neovim?

VSCode was fine, but I wanted something faster and more keyboard-driven. Plus, configuring everything in Lua is actually pretty fun once you get past the initial "wait, how do I quit this thing?" phase.

## The Setup

First, here's how I've organized everything:

```
.
├── init.lua
├── lazy-lock.json
└── lua
    ├── core
    │   └── keymaps.lua
    ├── plugins
    │   ├── alpha.lua
    │   ├── auto-close.lua
    │   ├── catppuccin.lua
    │   ├── completions.lua
    │   ├── copilot.lua
    │   ├── git-stuff.lua
    │   ├── harpoon.lua
    │   ├── lsp-config.lua
    │   ├── telescope.lua
    │   ├── treesitter.lua
    └── vim-options.lua
```

Nothing fancy, just a clean split between core config and plugins. I learned the hard way that dumping everything into init.lua becomes a mess real quick.

## The Good Stuff

### Keybindings That Actually Make Sense

Got tired of typing `:w` a thousand times a day, so here's what I'm using:


### Plugins I Can't Live Without

#### The Must-Haves
- Telescope: Because life's too short to use `find` (This is god send for me Neotree is just too slow)
- LSP: Makes my code look less awful before code review (I'm not a professional coder)
- Treesitter: Syntax highlighting that doesn't break every five minutes (I'm not a professional coder)
- Harpoon: Quick jumping between files I'm actually working on (Thanks Primeagen)

#### The Nice-to-Haves
- Catppuccin: A color scheme that doesn't burn my eyes at 2 AM (Love the colors from this theme)
- Auto-close: Because I'm too lazy to type closing brackets (Must need if you are moving from VSCode)
- None-ls: Formats my code so I can blame the tool instead of my style (I didnot understand this one)

### Plugin Management

Using Lazy.nvim because, well, it's fast and it just works. Here's a snippet:

## The Pain Points

Let's be real, it wasn't all smooth sailing:

1. LSP setup is still a bit of a pain. Had to Google "how to setup tsserver" way too many times. 
2. Muscle memory is hard. Kept hitting Ctrl+S and getting weird characters for the first week. 
3. Explaining to coworkers why my editor looks like a terminal from 1976. (But the code reviews are amazing the faces are priceless)

## What's Next

Still need to:
- Figure out a better debug setup (I'm not using anything as of now)
- Actually learn what half of Treesitter's features do 
- Stop tweaking my config during work hours 

## Try It Yourself

All my configs are on GitHub. Feel free to steal what works for you. Just remember:
You can find all my Neovim configurations at https://github.com/tanishq5414/dotfiles


1. Start small
2. Don't copy configs you don't understand
3. Prepare to break everything at least once

I also have my ssh keys in my other repo feel free to use it :)

Happy coding! 

---
*Written by someone who still occasionally types `:wq` in VSCode out of habit*

