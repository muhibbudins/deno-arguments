const normalize = (string) => {
  return string.replace(/^(\W|\d)+/gi, '')
}

const Arguments = (argv) => {
  const args = [...argv]
  const bracket = {}

  let skip = 0
  let current = null

  args.shift()

  args.map((item, index) => {
    /**
     * If argument includes equal sign
     */
    if (item.indexOf('=') > -1) {
      const token = item.split('=')
      bracket[normalize(token[0])] = normalize(token[1])

      return bracket
    }

    /**
     * If argument includes dash or double dash and skipper not equal current index
     */
    else if ((item.indexOf('-') > -1 || item.indexOf('--') > -1) && skip !== index) {
      current = normalize(item)
      bracket[current] = null

      skip = index + 1
    }

    /**
     * If current index equal skipper and then argument not equal "null"
     */
    else if (index === skip && current !== null) {
      bracket[current] = item
    }

    /**
     * Else use argument as key and value set to "true"
     */
    else {
      bracket[item] = true
    }
  })

  return bracket
}

export default Arguments