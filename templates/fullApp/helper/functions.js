import Cryptr from "cryptr";
import pkg from "google-libphonenumber";
const { PhoneNumberUtil, PhoneNumberFormat } = pkg;

const cryptr = new Cryptr("myTotalySecretKey");
const phoneUtil = PhoneNumberUtil.getInstance();
const PNF = PhoneNumberFormat;

const randomSixDigit = () => Math.floor(100000 + Math.random() * 900000);

const replaceNullToBlankString = async (obj) => {
    await Object.keys(obj).forEach((key) => {
        if (obj[key] === null) {
            obj[key] = "";
        }
    });
    return obj;
};

const formatNumber = async (phone_number, countryCode) => {
    try {
        if (phone_number.substr(0, 1) !== "+") {
            let number = await phoneUtil.parseAndKeepRawInput(phone_number, countryCode);
            phone_number = phoneUtil.format(number, PNF.E164);
            return phone_number;
        } else {
            let number = await phoneUtil.parseAndKeepRawInput(phone_number, countryCode);
            phone_number = phoneUtil.format(number, PNF.E164);
            return phone_number;
        }
    } catch (error) {
        return false;
    }
};

const encryptStringCrypt = async (string_value) => {
    let encryptedString = cryptr.encrypt(string_value);
    return encryptedString;
};

const CryptrdecryptStringCrypt = async (string_value) => {
    let decryptedString = cryptr.decrypt(string_value);
    return decryptedString;
};

const matchPassword = async (password, encryptedPassword) => {
    let decryptedString = cryptr.decrypt(encryptedPassword);
    return decryptedString === password;
};

export { randomSixDigit, replaceNullToBlankString, formatNumber, encryptStringCrypt, CryptrdecryptStringCrypt, matchPassword };
