// Daily Project: Create page with login...

Considerations:

DONE  1) Install express, mustache-express, express-session
DONE  2) require packages + static 
3) if/else user logged in? -----> NO: route to redirect?

                          -----> YES: redirect to root
    app.get root
    display username & logged in status (res.send)
4) create login page/form (action/method) with username and password fields and submit button
5) form action should route to login, method should be POST
6) What does it mean to be logged in?
  i)validate username & password

      var users = req.session.users = { }
      {Edwin: "Bacon1"}

  ii) use session middleware (app.use:  const users = req.session.users;) to count views and app.get to return the count of views.
