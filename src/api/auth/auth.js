import request from '@/utils/request'

export function userRegister(userDTO) {
  return request({
    url: '/billboard/show',
    method: 'post',
    data: userDTO
  })
}