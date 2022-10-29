export type CustomError = {
  type: string
  message: string
  code: number
}

export const throwError = (
  type: string,
  error: Error | string,
  code: number
) => {
  const message = typeof error === "string" ? error : error.message

  throw {
    type,
    message,
    code,
  }
}
