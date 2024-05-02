const doSomething = (): ResultType => [
  try {
    throw new Error("error");
  } catch (e: unknown | any) {
    return [false, e.message]
  }
]