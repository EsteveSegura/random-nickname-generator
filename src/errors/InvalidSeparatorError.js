class InvalidSeparatorError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
};

module.exports = InvalidSeparatorError;
