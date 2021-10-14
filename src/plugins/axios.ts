import axiosBase, { AxiosInstance } from 'axios'
import router from '@/router/index'
import i18n from './i18n'

const config = {
  withCredentials: true,
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
}

const axios: AxiosInstance = axiosBase.create(config)

axios.interceptors.response.use(
  response => response,
  error => {
    console.error(error.response)
    if (error.response.status === 401) {
      router.push('/login')
    }
    if (error.response.status === 403) {
      router.push('/not-found')
    }
    if (error.response.status === 413) {
      console.error(i18n.global.t(`error.${error.response.status}`))
    }
    if (error.response.status === 422) {
      console.error('バリデーションエラー')
    }
    if (error.response.status === 500) {
      console.error(i18n.global.t(`error.${error.response.status}`))
    }
    return Promise.reject(error)
  }
)

export { axios }
