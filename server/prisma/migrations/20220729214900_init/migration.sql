-- CreateTable
CREATE TABLE `users_test_jose_luis_ariza` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `segundo_nombre` VARCHAR(30) NULL,
    `apellido_paterno` VARCHAR(30) NOT NULL,
    `apellido_materno` VARCHAR(30) NULL,
    `fecha_de_nacimiento` DATE NOT NULL,
    `email` VARCHAR(80) NOT NULL,
    `telefono` INTEGER NOT NULL,

    UNIQUE INDEX `users_test_jose_luis_ariza_ID_key`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
