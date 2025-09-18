# 📚 Comandos Git – Fluxo de Trabalho

## ⚙ Configuração Inicial

| Comando                                                 | Descrição                                      |
| ------------------------------------------------------- | ---------------------------------------------- |
| `git config --global user.name "Seu Nome"`              | Define seu nome para identificar commits.      |
| `git config --global user.email "seuemail@example.com"` | Define seu e-mail para identificar commits.    |
| `git config --global init.defaultBranch main`           | Define a branch padrão como `main`.            |
| `git config --global pull.rebase false`                 | Evita rebase automático ao puxar atualizações. |

---

## 🛠 Fluxo – Trabalhando Sozinho (sempre criar branch nova)

| Comando                             | Descrição                              |
| ----------------------------------- | -------------------------------------- |
| `git clone <url_do_repositorio>`    | Clona o repositório para o computador. |
| `git checkout -b nome-da-branch`    | Cria e muda para uma nova branch.      |
| `git add .`                         | Adiciona todas as alterações.          |
| `git add arquivo.extensao`          | Adiciona apenas um arquivo específico. |
| `git commit -m "mensagem"`          | Registra alterações localmente.        |
| `git push -u origin nome-da-branch` | Envia branch para o GitHub.            |

---

## 👥 Fluxo – Trabalhando em Grupo (atualizando `main`)

| Comando                           | Descrição                                        |
| --------------------------------- | ------------------------------------------------ |
| `git pull origin main`            | Puxa atualizações da branch `main`.              |
| `git checkout -b nome-da-feature` | Cria branch para nova funcionalidade (opcional). |
| `git add .`                       | Adiciona todas as alterações.                    |
| `git commit -m "mensagem"`        | Registra alterações localmente.                  |
| `git push origin main`            | Envia alterações para a `main`.                  |

---

## 🔄 Troca e Gerenciamento de Branches

| Comando                                   | Descrição              |
| ----------------------------------------- | ---------------------- |
| `git checkout nome-da-branch`             | Troca de branch.       |
| `git branch`                              | Lista branches locais. |
| `git branch -d nome-da-branch`            | Deleta branch local.   |
| `git push origin --delete nome-da-branch` | Deleta branch remota.  |

---

## 📥 Atualizar Branch com `main`

| Comando                   | Descrição                    |
| ------------------------- | ---------------------------- |
| `git checkout main`       | Vai para a branch `main`.    |
| `git pull origin main`    | Atualiza `main`.             |
| `git checkout sua-branch` | Volta para sua branch.       |
| `git merge main`          | Mescla `main` na sua branch. |

---

## 🛠 Comandos Úteis

| Comando                           | Descrição                                      |
| --------------------------------- | ---------------------------------------------- |
| `git status`                      | Mostra status e alterações pendentes.          |
| `git log --oneline --graph --all` | Mostra histórico resumido em forma de gráfico. |
| `git stash`                       | Guarda alterações temporariamente.             |
| `git stash pop`                   | Recupera alterações guardadas.                 |
