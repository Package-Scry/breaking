export type CustomError = {
  message: string
  code: number
}

export const throwError = (error: Error | string, code: number) => {
  const message = typeof error === "string" ? error : error.message

  throw {
    message,
    code,
  }
}
