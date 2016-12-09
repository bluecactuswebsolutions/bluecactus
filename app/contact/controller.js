const Nav = require('../common/nav.vue');
const Foot = require('../common/footer.vue');
const Result = require('./result.vue');

module.exports = {
  components: {
    'nav-bar': Nav,
    'foot': Foot,
    'result': Result
  },
  created: function() {
    window.addEventListener('keyup', this.clearErr);
  },
  data: function () {
    return {
      message: {
        email: '',
        title: '',
        body: ''
      },
      confirmEmail: '',
      result: false,
      badEmail: false,
      badTitle: false,
      badMessage: false
    };
  },
  methods: {
    email: function(e) {
      e.preventDefault();
      const vm = this;

        if ((this.confirmEmail != this.message.email) || (this.message.email === '') || (this.message.email === '')) {
          this.badEmail = true;
        } else if (this.message.title === '') {
          this.badTitle = true;
        } else if (this.message.body === '') {
          this.badMessage = true;
        } else {
          vm.$http.post('/api/contact', this.message).then(function (data) {
            this.result = true;
            for (let i = 0; i < this.message.length; i++) {
              message[i] = '';
            }
          }, function(err) {
            console.log(err);
          });
        }
    },
    clearErr: function(e) {
     this.badEmail = false;
     this.badTitle = false;
     this.badMessage = false;
    }
  }
};
