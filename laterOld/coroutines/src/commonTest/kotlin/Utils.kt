infix fun Int.divide(other: Int): Int {
    if (other == 0) error("Thou shall not divide by zero")
    return this / other
}