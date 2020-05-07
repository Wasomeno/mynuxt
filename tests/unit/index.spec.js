import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Menus from '@/pages/menus/index.vue'

describe('index.vue', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('memanggil Rest API dengan Axios', async (done) => {
    const mockSuccessResponse = [
      'a', 'b', 'c'
    ];
    const mockFetchPromise = Promise.resolve({
      data: mockSuccessResponse,
    });axios.get = jest.fn().mockResolvedValue(mockFetchPromise)

    const wrapper = shallowMount(Menus)
    await wrapper.vm.created()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/categories.php')
    expect(wrapper.vm.categories).toEqual(mockSuccessResponse)
    done()
  })
})