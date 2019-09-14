class User {
  constructor (name) {
    this.name = name
  }
  save (callback) {}
}

describe('User', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new User('Luna')
      user.save(done())
    })
  })
})
