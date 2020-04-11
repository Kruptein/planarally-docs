# Work in progress

#Basic Server User Management
---
Currently as of v0.19.3 there is no graphical interface for user management from the server level thus you have to use python scripts for user management.

## List all usernames on server  
'''
<python>
[ u.name for u in User.select() ]
</python>
'''  

## Change the password for a specific user  
Change the italized text.  
'''
<python>
from models import User  
u = User.get(name="*some-username*")  
u.set_password("*new-passowrd*")  
u.save()  
</python>
'''  