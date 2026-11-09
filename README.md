# Command Line Word Games — 004 Web APIs

#### Duration: One day

#### Presentation: Mandatory, at a time set by your instructor

#### Format: Solo project

This repo is a WBS CODING SCHOOL template. **Use this template** (the green
button on GitHub) to create your own repo, and merge every change to `main`
through a Pull Request. Keep your repo public, and do not add your instructors
as collaborators. They read it from the outside, the same way anyone else would.

## Where you are

Four stages. Each stage names what ends it, which is the part easy to lose sight
of from the inside.

1. **Create your repo from this template, clone it, run `/onboard`.** Ends when
   the check passes and you can run all three programs from the command line.
2. **Pick a task, cut a branch.** `git switch -c <task-id>-<short-name>`. Ends
   when you have a branch for the work instead of committing to `main`.
3. **Write it, commit it, explain it.** Ends when the sign-off is recorded. It
   tells you what just opened up.
4. **Open a Pull Request.** Ends when it is merged. Then return to stage 2 with
   the next task.

## The requirements

| id | what it asks for |
| --- | --- |
| FR001 | Solo project. Complete it on your own, no teammates. |
| FR002 | A single public GitHub repository, kept public for instructor review. Do not add instructors as collaborators. |
| FR003 | Every change to `main` goes through a Pull Request. |
| FR004 | During your presentation, explain your code line by line. |
| **FR005** | **Rock Paper Scissors.** Read the player's move from `process.argv`, generate a random computer move, decide the winner, and print the result. |
| **FR006** | **Pig Latin translator.** Read a phrase from `process.argv` and print it translated to Pig Latin, word by word. |
| **FR007** | **Caesar Cipher.** Read a phrase and a shift from `process.argv`, shift every letter by that amount (case-insensitive, negative shifts go left), and print the result. |
| **FR008** | Rock Paper Scissors rejects a missing or invalid move with a usage message instead of crashing. |
| **FR009** | The Pig Latin translator rejects a missing phrase with a usage message instead of crashing. |
| **FR010** | The Caesar Cipher rejects a missing or non-numeric shift with a usage message instead of crashing. |
| **FR011** | The Caesar Cipher passes spaces, punctuation and numbers through unchanged. |
| **FR012** | The Pig Latin translator passes punctuation and numbers through unchanged. |

**Bold = you type this one yourself.** For the others, you may ask the agent to
help you implement them.

## The setup

This project is plain Node.js, no npm packages and no `package.json`. Each
program is one file in `scripts/`, run directly with `node scripts/<file>.js
<args>`. Do not add a
dependency or a `package.json` partway through: there is nothing here that
needs one, and it is the one thing that would stop this repo from being three
files anyone can clone and run immediately.

Nothing here needs a key, a database, or a `.env` file. Everything the
programs need arrives on the command line and nothing is written to disk.

## What you type, and where the agent can help

Four things are yours: **reading `process.argv`**, **generating the random
computer move**, **the string manipulation** behind Pig Latin and the cipher,
and **the control flow** — every loop, condition and function — that drives
all three programs. This is your first JavaScript project, so the logic in
all three files is what you are here to practise, start to finish.

**Everything else you may ask the agent to help implement:**

- Setting up the file structure and the scaffolding comments in each file.
- Wording for usage and error messages (the text itself, not the check that
  decides when to print it).
- The git and GitHub side of FR002 and FR003: branches, PR descriptions,
  merges.
- Explaining an error message or a failing run without writing the fix for
  you.

**The agent waits to be asked.** It will not start building because a file is
empty or because your plan is finished. None of this is a to-do list it works
through on its own. Ask it for what you want. Before every code edit, it asks
at least one question about your requested change and waits for your answer.

Yes, this tells you exactly what you could paste into a browser chat instead.
You are given the rule directly rather than fenced in by it. A rule you can
read is one you can choose to follow.

## Write it, commit it, explain it

When you have written one of the tasks marked in bold above:

```
1. Write it.
2. Commit it.   git add <your file> && git commit --signoff -m "<task id>: <what it does>"
3. Explain it.  The agent asks what your commit does, then a few short questions.
```

**Step 3 is the one worth having.** Explaining code you have just written is how
you find out whether you understood it, and it works the same whether anyone is
listening or not. Expect one question about what your commit does and up to three
short follow-ups: more for a big commit, fewer for a small one. Nothing is graded
and nothing you say is written down. The commit ahead of it in the history is
already the record of who wrote what.

**What changes afterwards.** Once you have written and explained one piece of a
given kind of code, the agent will write that kind with you for the rest of the
project, including in features that are nowhere in the requirements.

Which of the tasks marked in bold you have done is kept in a small file under
`.claude/harness/progress/`, filed under your git email. The agent writes it once
you have explained your commit; you commit it like anything else. Ask it where you
stand whenever you want to know.

### Signing your commits

`git commit --signoff` adds one line to the commit message:

```
Signed-off-by: Lea Müller <lea.mueller@example.com>
```

It means **I wrote this code**. It is an ordinary git trailer and you will meet it
in real projects. Nothing here checks it, and it is worth doing anyway. Use it on
all of your own work, not only on the tasks marked in bold.

When the agent wrote or helped write something, the commit carries a
`Co-Authored-By: Claude …` line instead, which it adds itself. Between the two,
`git log` shows who wrote what, which is more use to all of you than trying to
remember by the end of the day.

## Before you write code

Three programs, three files, nothing shared between them, all under `scripts/`:
`scripts/rockPaperScissors.js`, `scripts/pigLatin.js` and `scripts/caesarCipher.js`.
Build them in whatever order you like — the
rules above and the Pig Latin/Caesar examples in the project brief are the whole
spec, so read those twice before typing.

One decision worth making up front for the cipher: a shift can push a letter past
`z` or before `a`. Decide how you will wrap it back into the alphabet (the
remainder after dividing by 26 is the usual trick) before you start writing the
shifting logic, rather than discovering the bug on `"z"` shifted by `1`.

Keep your own notes wherever you like, and turn them into GitHub Issues on your
repo once they firm up. Ask for help if you are stuck for more than 30 minutes, and
use the daily stand-ups.

## Running it

Open **this folder** in VS Code and start Claude Code from the repo root. Starting
it from a subfolder silently drops this folder's settings, which mostly means the
agent starts writing code it should be helping you write.

Your progress is filed under your git email, so set it once and use the same one on
every machine you work from. Otherwise the work you did in the lab and the work you
did at home end up in two separate records, and neither counts for the other.

**If you want the agent to talk differently**, with simpler language, shorter
answers, or more or less detail, say so, and ask it to save that as a personal
skill in `~/.claude/skills/`. It travels with you to the next project, so you only
have to ask once. It changes how the agent talks, not which code you must write
yourself.

Inline suggestions (Copilot-style ghost text) are turned off for this folder in
`.vscode/settings.json`. That file is read-only, and the agent cannot write to it.
Otherwise it could restore ghost text in a single edit, and ghost text is the one
form of help that arrives without being asked.

**This file is read-only too**, along with `CLAUDE.md`. This page is the
requirements: it tells the agent which code you must write and where it may help
after you ask, so it is not a page the agent gets to reword.

If you think a requirement is wrong or unclear, say so to your instructor. That is
a conversation, not a diff.

None of these locks is a cage, and you should know that up front. Read-only here
means VS Code rejects typing in those buffers, there is a setting to change that,
and you can use other editors. But none of it can happen quietly. Every file
named above is committed, so any change lands in your PR with your name on it.
That is the mechanism: not "you cannot", but "it is visible".
