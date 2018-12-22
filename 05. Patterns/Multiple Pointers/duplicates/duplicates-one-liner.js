function duplicates() {
  return new Set(arguments).size !== arguments.length;
}
