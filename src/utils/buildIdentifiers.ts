/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findModuleFactory } from "@webpack";

import { makeLazy } from "./lazy";

export const spreadDisable = makeLazy(() => {
    const tooltipsFactory = findModuleFactory("tooltipTop,bottom:");
    if (tooltipsFactory == null) {
        return false;
    }

    return String(tooltipsFactory).includes('="div",...');
});
