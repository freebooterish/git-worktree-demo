export const qaData = [
  {
    id: 1,
    question: '什麼是 Git Worktree？',
    answer: 'Git Worktree 允許你在同一個 Git 儲存庫中同時檢出多個工作目錄。這意味著你可以在不切換分支的情況下，同時在多個分支上開發不同的功能，每個分支對應一個獨立的資料夾。'
  },
  {
    id: 2,
    question: '使用 Worktree 有什麼好處？',
    answer: '主要好處包括：\n1. 避免頻繁的 `git stash` 暫存和還原。\n2. 可以在不同的相依性環境中同時運行（例如不同分支需要不同的 `npm install`）。\n3. 方便即時切換上下文，如緊急修復 bug 時可以開啟一個新 worktree 而不影響當前開發狀態。'
  },
  {
    id: 3,
    question: '建立和刪除 Worktree 的常用指令是什麼？',
    answer: '建立新的 Worktree：`git worktree add <path> <branch>`\n列出所有 Worktree：`git worktree list`\n刪除 Worktree：`git worktree remove <path>`'
  },
  {
    id: 4,
    question: '我可以在不同的 Worktree 共用 IDE 嗎？',
    answer: '是的，您可以將每個 Worktree 視為獨立的專案在 IDE 中開啟。如果您使用的是 VS Code，可以使用 workspace 功能將多個 Worktree 加入同一個視窗，或者單獨開啟它們。'
  }
];
