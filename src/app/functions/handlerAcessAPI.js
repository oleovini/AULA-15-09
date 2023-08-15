'use server'
const users = [
    {
      name: 'Leo',
      email: 'leo@gmail.com',
      password: 'senhadaora',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
      name: 'Vini',
      email: 'vini@gmail.com',
      password: 'senhadaora',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {
        name: 'Costa',
        email: 'costa@gmail.com',
        password: 'senhadaora',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
  ];

  const getUserAuthenticated = (email, password) => 
  {
        users.map((u) =>{
            let userAutenticated = ''
            if(u.email === users.email && u.password === users.password){
                let userAutenticated = u
                console.log('Tudo certo')
            }
            return userAutenticated;
          }
          )

  }

  const getUsers = () => {
    return users;
  };
export { getUsers, getUserAuthenticated };