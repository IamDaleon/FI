import React from 'react'

const ByCategory = () => {
  return (
    <>
    <section class="text-gray-600 bg-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">By Category</h1>
        <div class="h-1 w-20 bg-gray-800 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400"> Choose from numerous strains like Maeng Da, Borneo, Bali, Indo, and more in powder, capsule, and liquid forms.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Kratom</h2>
          <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Kratom Alternatives</h2>
          <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Incense & Smudge</h2>
          <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Speciality Herbs</h2>
          <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default ByCategory