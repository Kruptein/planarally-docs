# Basic Server User Management

---

Currently as of v0.22.3 there is no graphical interface for user management from the server level thus you have to use python scripts for user management.

always make sure your in a python shell first before running any of these scripts. Just simply open a terminal and type in "python3" to open a shell, you can exit the shell with just "quit()"

PlanarAlly uses peewee as its database orm tool.

## List all usernames on server

```python
from models import User
[ u.name for u in User.select() ]
```

## Change the password for a specific user

Change the italized text.

```python
from models import User
u = User.get(name="*some-username*")
u.set_password("*new-passowrd*")
u.save()
```
