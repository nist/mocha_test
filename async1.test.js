class User {
  constructor (name) {
    this.name = name
  }
  save () { return true }
}

describe('User', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new User('Luna')
      user.save(done())
      // user.save(function (err) {
      //   if (err) done(err)
      //   else done()
      // })
    })
  })
})
