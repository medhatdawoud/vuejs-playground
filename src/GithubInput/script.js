import bus from '../bus'
import GithubOutput from '../GithubOutput/index.vue'

export default {
  name: 'GithubInput',
  components: {
    'github-output': GithubOutput
  },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        bus.$emit('new-username', this.username);
      }
    }
  },
}