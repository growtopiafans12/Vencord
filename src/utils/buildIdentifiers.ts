/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { makeLazy } from "./lazy";

export const spreadDisabled = makeLazy(() => {
    const tooltipsFactory = Vencord.Webpack.findModuleFactory("tooltipTop,bottom:");
    if (tooltipsFactory == null) {
        return false;
    }

    return !String(tooltipsFactory).includes('="div",...');
});
