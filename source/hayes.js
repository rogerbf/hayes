const Hayes = (state = {}) => ({
  ...state,
  setSyntax (syntax) {
    return Hayes({
      basic: {
        syntax: {
          command_termination: `<CR><LF>`,
          modes: {
            test: `=?`,
            read: `?`,
            write: `=`
          }
        }
      }
    }[syntax])
  }
})

export default Hayes
