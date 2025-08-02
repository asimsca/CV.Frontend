export class RegexPatterns {
  static readonly nonFiveOrThirteenPattern = /^(?!5$|13$).+$/;
  static readonly codePattern = /^(?=.{2,20})([a-zA-Z][a-zA-Z0-9 -]*)$/;
  static readonly addressPattern = /^(?=.{5,150})([a-zA-Z0-9 ]*)$/;
  static readonly bizNamePattern = /^(?=.{3,50})([a-zA-Z ]*)$/;
  static readonly decimalNumberPattern = /^\b\d{2,2}\.\d{5,5}\b$/;
  static readonly letterAndSpacePattern = /^(?=.{5,50})([a-zA-Z ]*)$/;
  static readonly zeroPrefixedPhoneNumberPattern = /^[0][0-9]{10}$/;
  static readonly specialPhoneNumberPattern =
    /^(?=.{11,11})([0][3][4][1-8]\d{7})*$/;
  static readonly phoneNumberPattern = /^(0\d{10}|92\d{10})$/;
  static readonly alphabeticStringPattern = /^(?=.{0,50})([a-zA-Z ]*)$/;
  static readonly alphanumericStringPattern = /^(?=.{0,50})(\w)*$/;
  static readonly cnicPattern = /^\d{5}-\d{7}-\d$/;
  static readonly nicPattern = /^\d{3,3}-\d{2,2}-\d{6,6}$/;
  static readonly otherSpecialPattern = /^(?=.*[A-Z\d])[A-Z\d]{11,}$/;
  static readonly alphabeticCharactersOnlyPattern = /^[a-zA-Z ]*$/;
  static readonly numericDigitsOnlyPattern = /^[0-9]*$/;
  static readonly numbersOnlyPattern = /^[0-9]*$/;
  static readonly digitsOnlyPattern = /^\d+$/;
  static readonly quantityPattern = /^(?!0$)\d{2,}$/;
  static readonly iccidPattern = /^\d{19}$/;
  static readonly scratchCardPattern = /^\d{12}$/;
  static readonly alphanumericCharactersPattern = /^[a-zA-Z0-9 ]*$/;
  static readonly squareBracketsContentPattern = /\[(.*?)\]/;
  static readonly specialCharactersExcludedPattern =
    /^[^`,!~@#_<{}+\[\]|\>=.?/:';$%^&()]$/;
  static readonly specialFormatPattern = /^[A-Z\d]{3}-\d{4}-\d{4}$/;
  static readonly emailPattern = /^\S+@\S+\.\S+$/;
  static readonly fourOrSixDigits = /^\d{4}(\d{2})?$/;     
}