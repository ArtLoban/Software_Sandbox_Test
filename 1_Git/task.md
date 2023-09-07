**Task**  
Set project under the GIT and push code to the repo

---

**Answer**

Check current config data
```
git config --list
```

Set user data (if needed)
```
git config --global user.name "Art Dev"
git config --global user.email dev@example.com
```

Init repo from the project root
```
git init
```

Create file and add project description
```
touch README.md
```

Create git ignore file, add rules
```
touch .gitignore
```

Add finished code the commit
```
git add .
git commit -m 'Done'
``` 

Locally generate public/private rsa key pair (if not exists yet) 
```
ssh-keygen -t rsa -b 4096 -C "dev@example.com"
```

Print public key to terminal, or store to the file
```
cat ~/.ssh/id_rsa.pub > Documents/public_key
```

Copy the key value and add it in the GIT profile settings  


Add remote repository as `origin`
```
git remote add origin git@example.com:example/test.git
```

Push code the `master` branch of origin repository
```
git push origin master
```

Done
