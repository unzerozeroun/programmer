use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
pub fn process_commit(json_str: &str) {
    // Parse le JSON reçu sous forme de string
    let parsed: serde_json::Value = serde_json::from_str(json_str).unwrap();

    let commits = parsed["values"].as_array().unwrap();
    for commit in commits {
        let author = &commit["author"]["displayName"];
        let message = &commit["message"];
        console::log_1(&format!("{} → {}", author, message).into());
    }
}
