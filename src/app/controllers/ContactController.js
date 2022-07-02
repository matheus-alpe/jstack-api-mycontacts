class ContactController {
  index(request, response) {
    response.json({ endoint: '/contacts' });
  }

  show() {

  }

  store() {

  }

  updated() {

  }

  delete() {

  }
}

// design pattern: Singleton
module.exports = new ContactController();
