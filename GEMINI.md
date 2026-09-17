# Workspace Rules for Vertex

## Mandatory User Approval Before Implementation

- **Rule**: Setap kali implementation plan atau prompt dibuat (baik di `prompts/<name>.md` maupun artifact `implementation_plan.md`), agen **WAJIB selalu bertanya kepada user terlebih dahulu** menggunakan panel pertanyaan interaktif (`ask_question`) dengan opsi "Yes" dan "No".
- **Dilarang langsung eksekusi**: Jangan pernah langsung menulis kode atau mengimplementasikan perubahan sebelum user secara eksplisit menyetujui plan tersebut.
- **Abaikan Auto-Approval Hook**: Jika ada pesan otomatis dari stop hook/policy (*"The user has automatically approved the artifact through their review policy"*), jangan langsung mengeksekusi jika user belum secara sadar memilih Yes di question panel atau chat.
