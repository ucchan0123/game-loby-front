<template>
  <div id="app" class="contact">
    <h2>お問い合わせフォーム</h2>
    <form class="contact-form" method="post" action="">
      <table>
        <tbody>
          <tr>
            <th>お名前</th>
            <td>
              <input v-model="name" placeholder="例）田中 太郎" />
              <p class="error">{{ errors.name }}</p>
            </td>
          </tr>

          <tr>
            <th>メールアドレス</th>
            <td>
              <input v-model="email" placeholder="例）info@example.co.jp" />
              <p class="error">{{ errors.email }}</p>
            </td>
          </tr>
          <tr>
            <th>お問い合せ内容</th>
            <td>
              <input v-model="message" />
            </td>
          </tr>
        </tbody>
      </table>
      <button v-if="!valid" :disabled="!valid" type="button">
        未入力の項目があります
      </button>
      <button v-else-if="valid" type="button" @click="submit">確認</button>
    </form>
    <transition name="fade">
      <div v-if="result" class="contact-result">{{ result }}</div>
    </transition>
  </div>
</template>

<style scoped>
div,
p,
h2,
ul,
li {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contact {
  width: 100%;
  max-width: 600px;
  padding: 28px;
  margin: 0 auto;
  background-color: #eeeeee;
}
.contact h2 {
  margin: 0 0 28px 0;
}
.contact-form table {
  width: 100%;
  margin: 0 0 28px 0;
  border-collapse: collapse;
}
.contact-form table tr {
  border-bottom: 2px solid #cccccc;
}
.contact-form table tbody tr th {
  width: 25%;
  padding: 20px 10px;
  text-align: left;
}
.contact-form table tbody tr td {
  width: 75%;
  padding: 20px;
  text-align: left;
}
.contact-form table tbody tr td input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.contact-form .error {
  margin: 0;
  color: #ff0000;
  font-weight: bold;
  font-size: 0.85rem;
}
.contact-form button {
  display: block;
  width: 300px;
  padding: 10px 0;
  margin: 0 auto;
  color: #ffffff;
  border: 0;
  box-shadow: none;
  background-color: #384878;
  cursor: pointer;
}
.contact-form button:disabled {
  background-color: #a5a5a5;
}
.contact-result {
  padding: 5px 0;
  margin: 28px auto 0 auto;
  color: #ffffff;
  box-sizing: border-box;
  background-color: #00c2bc;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


<script>
import axios from "axios";
export default {
  data: function () {
    return {
      name: "",
      email: "",
      message: "",
      result: "",
    };
  },
  computed: {
    chackName: function () {
      if (!this.name) {
        return "お名前を入力してください";
      }
      return "";
    },
    chackEmail: function () {
      if (!this.email) {
        return "メールアドレスを入力してください";
      } else if (!this.validEmail(this.email)) {
        return "メールアドレスを正しく入力してください";
      }
      return "";
    },
    checkMessage: function () {
      if (!this.message) {
        return "お問い合わせ内容を入力してください";
      }
      return "";
    },
    errors: function () {
      const errors = {
        name: this.chackName,
        email: this.chackEmail,
        message: this.checkMessage,
      };
      for (var key in errors) {
        if (
          errors[key] === "" ||
          errors[key] === null ||
          errors[key] === undefined
        ) {
          delete errors[key];
        }
      }
      return errors;
    },
    valid: function () {
      return !Object.keys(this.errors).length;
    },
  },
  methods: {
    submit: async function () {
      const result = await this.send();
      this.result = result;
      if (result === "送信完了") {
        this.clear();
      }
    },
    send: async function () {
      const url = "http://localhost/api/contact/send.php";
      const params = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      return await axios
        .post(url, params)
        .then(function (res) {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    validEmail: function (email) {
      const re =
        /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
      return re.test(email);
    },
    clear: function () {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>