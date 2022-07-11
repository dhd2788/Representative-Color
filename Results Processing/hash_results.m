string = 'Dara Dimoff';
sha256hasher = System.Security.Cryptography.SHA256Managed;
sha256 = uint8(sha256hasher.ComputeHash(uint8(string))); %consider the string as 8-bit characters
%display as hex:
chars256 = dec2hex(sha256);

sha1hasher = System.Security.Cryptography.SHA1Managed;
sha1= uint8(sha1hasher.ComputeHash(uint8(string))); %consider the string as 8-bit characters
%display as hex:
chars1 = dec2hex(sha1);
convertCharsToStrings(chars1);