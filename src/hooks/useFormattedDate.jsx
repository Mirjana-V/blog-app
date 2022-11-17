import React from "react";

import { format } from 'date-fns'

export default function useFormattedDate(str, outputFormat = 'yyyy-mm-dd hh:mm:ss') {

    if (str) {
        return format(new Date(str), outputFormat)
    } return ('not listed');
}