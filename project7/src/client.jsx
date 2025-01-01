import { createClient } from '@supabase/supabase-js'

const URL = 'https://jdbjjxlvdpelsptdseai.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkYmpqeGx2ZHBlbHNwdGRzZWFpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNTQ0MjcxOSwiZXhwIjoyMDUxMDE4NzE5fQ.XvB1k22HeZ-z6AnLN8ug4dyu-3Ll5qst6h3mef2yaBs';

export const supabase = createClient(URL, API_KEY);