"use strict";

module.exports = {
  types: [
    {
      value: "build",
      name: "build:     Project build and dependency management"
    },
    { value: "ci", name: "ci:        Updating CI and scripts" },
    { value: "docs", name: "docs:      Documentation only changes" },
    { value: "feat", name: "feat:      A new feature" },
    { value: "fix", name: "fix:       A bug fix" },
    {
      value: "perf",
      name: "perf:      Performance changes"
    },
    {
      value: "refactor",
      name:
        "refactor:  Code refactoring without feature changes"
    },
    { value: "revert", name: "revert:    Commit reverts" },
    {
      value: "style",
      name:
        "style:     Codestyle changes (tabs, spaces, semicolons, etc.)"
    },
    { value: "test", name: "test:      Adding tests" }
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    { name: "components" },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: "What changes have you done?",
    scope: "\nChoose SCOPE (optional):",
    // Спросим если allowCustomScopes в true
    customScope: "Type custom SCOPE:",
    subject: "Write SHORT title in imperative mood:\n",
    body:
      'Write EXTENDED description (optional). Use "|" to separate lines:\n',
    breaking: "BREAKING CHANGES (optional):\n",
    footer:
      "You can place PR and issue links here: #72, #481:\n",
    confirmCommit: "Confirm commit?"
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: "LINKS:",

  // limit subject length
  subjectLimit: 72
};