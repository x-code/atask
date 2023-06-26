/* eslint no-mixed-operators: ["off", {"groups": [["&&", "||"]]}] */

export function transformErrorsFromMyApi (error, setErrors, setStatus) {
  error = (error.response && (error.response.data || error.toString()) || { msg: error.message })
  if (typeof error === 'string') {
    setStatus({ msg: 'Invalid Server Response' })
  } else {
    if (error.message) {
      if (Array.isArray(error.message)) {
        const errors = {}
        for (const message of error.message) {
          let param = message.param.split('.');
          param = param[param.length-1]
          if (!errors[param]) {
            errors[param] = []
          }
          errors[param].push(message.msg)
          // errors[message.param] = message.msg;
        }
        for (var index in errors) {
          errors[index] = errors[index].join(', ');
        }
        setErrors(errors)
      } else {
        error.msg = error.message
        delete error.message
        setStatus(error)
      }
    } else {
      setStatus(error)
    }
  }
}
