export default function({ $axios }: {$axios: any}) {
  $axios.setToken('access_token')

  $axios.onResponse((config: any) => {
      $axios.setHeader('Access-Control-Allow-Origin', 'http://back:3000')
  })
}