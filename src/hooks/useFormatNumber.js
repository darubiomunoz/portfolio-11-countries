
export default function useFormatNumber() {
  const formatNumber = (string) => {
    string += "";
    var x = string.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? `${"." + x[1]}` : "";
    var regex = /(\d+)(\d{3})/;

    while (regex.test(x1)) {
      x1 = x1.replace(regex, "$1" + "," + "$2");
    }

    return x1 + x2;
  };

  return formatNumber;
};
