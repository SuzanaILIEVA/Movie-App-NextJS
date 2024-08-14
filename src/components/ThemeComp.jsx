"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { TbSunHigh } from "react-icons/tb";

/*
note:
mounted state'i , bileşenin tamamen yüklenip yüklenmediğini kontrol eder.
 Bileşen yüklendiğinde (useEffect hook'u ile) setMounted(true) çağrılır 
 ve mounted değeri true olur. Bu, sadece istemci tarafında render edilen
 içerikleri kontrol etmek ve sunucu tarafı render işleminden kaçınmak için kullanılır.
 next-themes sunucu tarafı render sırasında çalışmaz, bu yüzden temayı
 doğru şekilde gösterebilmek için bileşenin tam olarak yüklenmesini beklemek gerekir.
*/
const ThemeComp = () => {
  //sayfa yuklenme stateini tutuyoruz
  const [mounted, setMounted] = useState(false);
  //systemTheme, kullanıcının işletim sisteminde belirlediği varsayılan temayı ifade eder.
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <TbSunHigh
            onClick={() => setTheme("light")}
            className="font-bold text-2xl cursor-pointer"
          />
        ) : (
          < MdOutlineDarkMode 
            onClick={() => setTheme("dark")}
            className="font-bold text-2xl cursor-pointer"
          />
        ))}
    </div>
  );
};

export default ThemeComp;
