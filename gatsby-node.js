/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ cache }) => {
  const cache_key = "test-time"
  const lastTestTime = await cache.get(cache_key)

  console.log(`last test time ${lastTestTime}`)

  const time = Date.now()
  console.log(`caching test time ${time}`)

  await cache.set(cache_key, time)
}
