declare global {
  var mongoose: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-an y
    conn: any | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    promise: Promise<any> | null;
  };
}
